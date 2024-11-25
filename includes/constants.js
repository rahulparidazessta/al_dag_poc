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
    TABLE_NAME: "{{ var.value.existing_name }}",
    DATASET_NAME: "{{ var.value.existing_dataset_name }}",
    FOLDER_PATH: "{{ var.value.existing_folder_path }}",
    FILE_NAME: "{{ var.value.existing_file_name }}",
    FILE_FORMAT: "{{ var.value.existing_file_format }}"
};

const INCOMING_CONST = {
    TABLE_NAME: "{{ var.value.incoming_name }}",
    DATASET_NAME: "{{ var.value.incoming_dataset_name }}",
    FOLDER_PATH: "{{ var.value.incoming_folder_path }}",
    FILE_NAME: "{{ var.value.incoming_file_name }}",
    FILE_FORMAT: "{{ var.value.incoming_file_format }}",
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
