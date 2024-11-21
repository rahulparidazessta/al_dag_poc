function generateExternalTableSQL(
    dataset,
    tableName,
    format,
    folderPath,
    fileName,
    options = {}
) {
    // Default options for CSV
    const csvOptions = {
        skipLeadingRows: options.skipLeadingRows !== undefined ? options.skipLeadingRows : 1,
        allowQuotedNewlines: options.allowQuotedNewlines !== undefined ? options.allowQuotedNewlines : true,
        allowJaggedRows: options.allowJaggedRows !== undefined ? options.allowJaggedRows : true
    };

    const uri = `gs://${folderPath}/${fileName}.${format}`;

    // Adjust format and options for specific formats
    if (format.toLowerCase() === 'psv') {
        csvOptions.fieldDelimiter = '|';
        format = 'csv';
    } else if (format.toLowerCase() === 'csv') {
        csvOptions.fieldDelimiter = ',';
    } else if (format.toLowerCase() === 'parquet') {
        // No CSV-specific options are needed for Parquet
        format = 'parquet';
    } else {
        throw new Error(`Unsupported format: ${format}`);
    }

    // Start the SQL statement
    let sql = `
CREATE OR REPLACE External TABLE \`${dataset}.${tableName}\`
OPTIONS (
    format = '${format}',
    uris = ['${uri}']`;

    // Append CSV-specific options only if the format is 'CSV'
    if (format.toLowerCase() === 'csv') {
        sql += `,
    skip_leading_rows = ${csvOptions.skipLeadingRows},
    allow_quoted_newlines = ${csvOptions.allowQuotedNewlines ? 'TRUE' : 'FALSE'},
    field_delimiter = '${csvOptions.fieldDelimiter}',
    allow_jagged_rows = ${csvOptions.allowJaggedRows ? 'TRUE' : 'FALSE'}`;
    }

    sql += `
)`;
    return sql;
}

module.exports = {
    generateExternalTableSQL
};
