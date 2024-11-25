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
    TABLE_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['existing_name'] }}",
    DATASET_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['existing_dataset_name'] }}",
    FOLDER_PATH: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['existing_folder_path'] }}",
    FILE_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['existing_file_name'] }}",
    FILE_FORMAT: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['existing_file_format'] }}"
};

const INCOMING_CONST = {
    TABLE_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['incoming_name'] }}",
    DATASET_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['incoming_dataset_name'] }}",
    FOLDER_PATH: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['incoming_folder_path'] }}",
    FILE_NAME: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['incoming_file_name'] }}",
    FILE_FORMAT: "{{ task_instance.xcom_pull('create_workflow_invocation')['invocation_config']['parameters']['incoming_file_format'] }}"
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
