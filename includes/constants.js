const MARCH = {
    TABLE_NAME: "march",
    DATASET_NAME: "airflow_demo",
    FOLDER_PATH: "airflow_demo_zessta",
    FILE_NAME: "dataset1",
    FILE_FORMAT: "parquet"
};

const SEPT = {
    TABLE_NAME: "september",
    DATASET_NAME: "airflow_demo",
    FOLDER_PATH: "airflow_demo_zessta",
    FILE_NAME: "dataset2",
    FILE_FORMAT: "parquet"
};

const EXISTING_CONST = {
  TABLE_NAME: dataform.projectConfig.vars.existing_name || "march", // Default: 'march'
  DATASET_NAME: dataform.projectConfig.vars.existing_dataset_name || "airflow_demo", // Default: 'airflow_demo'
  FOLDER_PATH: dataform.projectConfig.vars.existing_folder_path || "airflow_demo_zessta", // Default: 'airflow_demo_zessta'
  FILE_NAME: dataform.projectConfig.vars.existing_file_name || "dataset1", // Default: 'dataset1'
  FILE_FORMAT: dataform.projectConfig.vars.existing_file_format || "parquet" // Default: 'parquet'
};

const INCOMING_CONST = {
  TABLE_NAME: dataform.projectConfig.vars.incoming_name || "march", // Default: 'march'
  DATASET_NAME: dataform.projectConfig.vars.incoming_dataset_name || "airflow_demo", // Default: 'airflow_demo'
  FOLDER_PATH: dataform.projectConfig.vars.incoming_folder_path || "airflow_demo_zessta", // Default: 'airflow_demo_zessta'
  FILE_NAME: dataform.projectConfig.vars.incoming_file_name || "dataset2", // Default: 'dataset2'
  FILE_FORMAT: dataform.projectConfig.vars.incoming_file_format || "csv" // Default: 'csv'
};


const COLUMNS = [
    "streetno",
    "name",
    "streettype",
    "city",
    "state",
    "pincode",
    "ceofirstname",
    "middlename",
    "lastname",
    "lat",
    "long"
];

module.exports = {
    EXISTING_CONST,
    INCOMING_CONST,
    MARCH,
    SEPT,
    COLUMNS
};
