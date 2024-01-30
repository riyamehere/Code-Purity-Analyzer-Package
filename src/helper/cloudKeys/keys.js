/* eslint-disable max-lines */
/**
@author      : Riya
@date        : 2023-04-28
@description : An array of object of keyList containing cloudName, keyName and description of each key.
*/
const keysList = [
  {
    cloudName: 'AWS',
    keyName: 'AWS_ACCESS_KEY_ID',
    description: 'The access key ID that provides access to your AWS resources.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ACCOUNT_ID',
    description: 'The unique identifier for your AWS account.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_CLOUDFRONT_DISTRIBUTION_ID',
    description: 'The ID of your CloudFront distribution.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_CLOUDFRONT_ORIGIN_DOMAIN',
    description: 'The domain name of the origin server that is associated with your CloudFront distribution.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_CLOUDWATCH_LOG_GROUP_NAME',
    description: 'The name of your CloudWatch log group.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_CLOUDWATCH_LOG_STREAM_NAME',
    description: 'The name of your CloudWatch log stream.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_DEFAULT_OUTPUT',
    description: 'The default output format for AWS CLI commands.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_DEFAULT_OUTPUT_FORMAT',
    description: 'The default output format for AWS CLI commands.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_DEFAULT_PROFILE',
    description: 'The default profile to use for AWS CLI commands.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_DEFAULT_REGION',
    description: 'The default region to use for AWS CLI commands.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_EC2_AMI_ID',
    description: 'The ID of the Amazon Machine Image (AMI) that is used to launch your EC2 instance.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_EC2_INSTANCE_ID',
    description: 'The ID of your EC2 instance.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_EC2_SECURITY_GROUP_ID',
    description: 'The ID of the security group that is associated with your EC2 instance.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_EC2_SUBNET_ID',
    description: 'The ID of the subnet that is associated with your EC2 instance.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ECS_CLUSTER_NAME',
    description: 'The name of your ECS cluster.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ECS_SERVICE_NAME',
    description: 'The name of your ECS service.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ECS_TASK_DEFINITION_NAME',
    description: 'The name of your ECS task definition.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ELASTICACHE_CLUSTER_NAME',
    description: 'The name of your ElastiCache cluster.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ELASTICACHE_REPLICATION_GROUP_NAME',
    description: 'The name of your ElastiCache replication group.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ELASTICSEARCH_DOMAIN_NAME',
    description: 'The name of your Amazon Elasticsearch Service domain.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ELB_LOAD_BALANCER_NAME',
    description: 'The name of your Elastic Load Balancer (ELB) in the AWS environment.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ELB_TARGET_GROUP_NAME',
    description: 'The name of the target group that is associated with your ELB.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_EMR_CLUSTER_ID',
    description: 'The ID of your Amazon EMR cluster.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_IAM_ROLE_ARN',
    description: 'The Amazon Resource Name (ARN) of the IAM role that is used to access your AWS resources.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_KINESIS_STREAM_NAME',
    description: 'The name of your Amazon Kinesis stream.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_LAMBDA_FUNCTION_NAME',
    description: 'The name of your AWS Lambda function.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_LAMBDA_FUNCTION_VERSION',
    description: 'The version of your AWS Lambda function.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_PROFILE',
    description: 'The AWS CLI profile to use.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_RDS_DB_CLUSTER_IDENTIFIER',
    description: 'The identifier of your RDS DB cluster.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_RDS_DB_INSTANCE_IDENTIFIER',
    description: 'The identifier of your RDS DB instance.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_REDSHIFT_CLUSTER_IDENTIFIER',
    description: 'The identifier of your Amazon Redshift cluster.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_REGION',
    description: 'The region where your resources are located.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_ROUTE53_HOSTED_ZONE_ID',
    description: 'The ID of your Route53 hosted zone.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_S3_BUCKET',
    description: 'The name of the S',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_SECRET_ACCESS_KEY',
    description: 'The secret access key that is used to sign requests to AWS services.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_SESSION_TOKEN',
    description: 'The session token that is used to authenticate requests to AWS services.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_SNS_TOPIC_ARN',
    description: 'The Amazon Resource Name (ARN) of your Amazon Simple Notification Service (SNS) topic.',
  },
  {
    cloudName: 'AWS',
    keyName: 'AWS_SQS_QUEUE_NAME',
    description: 'The name of your Amazon Simple Queue Service (SQS) queue.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SUBSCRIPTION_ID',
    description: 'The Azure subscription ID for your account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_CLIENT_ID',
    description: 'The client ID used to authenticate with Azure.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_CLIENT_SECRET',
    description: 'The client secret used to authenticate with Azure.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_TENANT_ID',
    description: 'The tenant ID for your Azure account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_ACCOUNT',
    description: 'The name of your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_KEY',
    description: 'The access key for your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_CONNECTION_STRING',
    description: 'The connection string for your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_CONTAINER_NAME',
    description: 'The name of the container in your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_BLOB_NAME',
    description: 'The name of the blob in your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_FILE_SHARE_NAME',
    description: 'The name of the file share in your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_STORAGE_DIRECTORY_PATH',
    description: 'The path to the directory in your Azure Storage account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_ACCOUNT_NAME',
    description: 'The name of your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_KEY',
    description: 'The primary or secondary key for your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_DATABASE_NAME',
    description: 'The name of the database in your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_COLLECTION_NAME',
    description: 'The name of the collection in your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_DOCUMENT_ID',
    description: 'The ID of the document in your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_COSMOSDB_PARTITION_KEY',
    description: 'The partition key for your Azure Cosmos DB account.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_EVENTHUB_NAMESPACE',
    description: 'The namespace for your Azure Event Hub.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_EVENTHUB_CONNECTION_STRING',
    description: 'The connection string for your Azure Event Hub.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_EVENTHUB_NAME',
    description: 'The name of your Azure Event Hub.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_EVENTHUB_CONSUMER_GROUP',
    description: 'The consumer group for your Azure Event Hub.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SQL_SERVER_NAME',
    description: 'The name of your Azure SQL Server.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SQL_DATABASE_NAME',
    description: 'The name of your Azure SQL Database.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SQL_USER',
    description: 'The username to access your Azure SQL Database.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SQL_PASSWORD',
    description: 'The password to access your Azure SQL Database.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_KEYVAULT_NAME',
    description: 'The name of your Azure Key Vault.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_KEYVAULT_SECRET_NAME',
    description: 'The name of the secret in your Azure Key Vault.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_KEYVAULT_SECRET_VERSION',
    description: 'The version of the secret in your Azure Key Vault.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_SERVICE_NAME',
    description: 'The name of your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_ADMIN_API_KEY',
    description: 'The admin API key for your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_QUERY_API_KEY',
    description: 'The query API key for your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_INDEX_NAME',
    description: 'The name of the index in your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_INDEXER_NAME',
    description: 'The name of the indexer in your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_DATASOURCE_NAME',
    description: 'The name of the data source in your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_INDEXER_SCHEDULE',
    description: 'The schedule for your Azure Search indexer.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_INDEXER_PARAMETERS',
    description: 'The parameters for your Azure Search indexer.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_INDEXER_MAPPING',
    description: 'The mapping for your Azure Search indexer.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_SUGGESTER_NAME',
    description: 'The name of the suggester in your Azure Search service.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_SUGGESTER_SEARCH_MODE',
    description: 'The search mode for your Azure Search suggester.',
  },
  {
    cloudName: 'AZURE',
    keyName: 'AZURE_SEARCH_SUGGESTER_SOURCE_FIELD',
    description: 'The search mode for your Azure Search suggester field.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_APPLICATION_CREDENTIALS',
    description: 'The path to the JSON file containing your GCP credentials.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_PROJECT',
    description: 'The project ID for your GCP project.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_ZONE',
    description: 'The name of the zone for your GCP resources.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_REGION',
    description: 'The name of the region for your GCP resources.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_STORAGE_BUCKET',
    description: 'The name of your GCP Storage bucket.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_STORAGE_PROJECT',
    description: 'The project ID for your GCP Storage bucket.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_STORAGE_ACCESS_KEY',
    description: 'The access key for your GCP Storage bucket.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_STORAGE_SECRET_KEY',
    description: 'The secret key for your GCP Storage bucket.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_ZONE',
    description: 'The name of the zone for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_REGION',
    description: 'The name of the region for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_INSTANCE_NAME',
    description: 'The name of your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_MACHINE_TYPE',
    description: 'The machine type for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_DISK_SIZE',
    description: 'The size of the disk for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_BOOT_DISK_IMAGE',
    description: 'The boot disk image for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_BOOT_DISK_TYPE',
    description: 'The type of boot disk for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_BOOT_DISK_MODE',
    description: 'The mode of the boot disk for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_NETWORK',
    description: 'The name of the network for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SUBNETWORK',
    description: 'The name of the subnetwork for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_IMAGE_PROJECT',
    description: 'The project ID for the image used by your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_IMAGE_FAMILY',
    description: 'The family name for the image used by your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_IMAGE_NAME',
    description: 'The name of the image used by your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_STARTUP_SCRIPT',
    description: 'The startup script used by your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_METADATA',
    description: 'The metadata for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_TAGS',
    description: 'The tags for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_LABELS',
    description: 'The labels for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SSH_USERNAME',
    description: 'The username used for SSH access to your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SSH_PRIVATE_KEY',
    description: 'The private key used for SSH access to your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SSH_PUBLIC_KEY',
    description: 'The public key used for SSH access to your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SERVICE_ACCOUNT',
    description: 'The name of the service account for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SERVICE_ACCOUNT_EMAIL',
    description: 'The email address of the service account for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_SERVICE_ACCOUNT_SCOPES',
    description: 'The scopes for the service account for your GCP Compute Engine instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_COMPUTE_ENGINE_METADATA_STARTUP_SCRIPT_URL',
    description: 'The URL for the startup script in your GCP Compute Engine metadata.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_SQL_INSTANCE_NAME',
    description: 'The name of your GCP Cloud SQL instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_SQL_DATABASE_NAME',
    description: 'The name of the database in your GCP Cloud SQL instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_SQL_USER',
    description: 'The username to access your GCP Cloud SQL instance.',
  },
  {
    cloudName: 'GCP',
    keyName: 'GOOGLE_CLOUD_SQL',
    description: 'The username to access your GCP Cloud SQL instance',
  },
];

export default keysList;
