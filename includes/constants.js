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
    MARCH,
    SEPT,
    COLUMNS
};
