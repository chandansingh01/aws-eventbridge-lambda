# AWS Lambda for Managing EC2 and RDS Instances

This project provides an AWS Lambda function to automate the starting and stopping of AWS EC2 and RDS instances based on environment variables. The function can be scheduled using Amazon EventBridge and utilizes a Lambda layer for managing Node.js dependencies efficiently.

## Prerequisites

Before you begin, ensure you have the following:

1. **AWS Account**: Access to an AWS account with permissions to manage EC2 and RDS instances.
2. **Node.js**: Installed on your local machine.
3. **AWS SDK for JavaScript**: Included in your project dependencies.

## Project Structure

aws-lambda/
│ └── node_modules/
│ └── aws-sdk/
├── index.js
├── package.json
└── README.md

## About Environment Variables

Set the following environment variables in your Lambda function configuration:

- `EC2_INSTANCE_ID`: The ID of the EC2 instance to manage.
- `RDS_INSTANCE_ID`: The ID of the RDS instance to manage.
- `ACTION`: The action to perform (`start` or `stop`).

These environment variables are used by the Lambda function to determine which instances to manage and what action to perform on them.


## Scheduling the Lambda Function with Amazon EventBridge

To automate the execution of the Lambda function, use Amazon EventBridge to create a scheduled rule:

1. **Create a Rule**: Go to the Amazon EventBridge console and create a new rule.
2. **Define Schedule**: Set the schedule expression (e.g., cron or rate expression) to specify when the Lambda function should be triggered.
3. **Add Target**: Add the Lambda function as the target for the rule.

## Deployment

To deploy the Lambda function, follow these steps:

1. **Zip the Project**: Create a zip file of your project directory.
2. **Upload to AWS Lambda**: Go to the AWS Lambda console, create a new function, and upload the zip file.
3. **Set Environment Variables**: Configure the environment variables (`EC2_INSTANCE_ID`, `RDS_INSTANCE_ID`, and `ACTION`) in the Lambda function settings.
4. **Attach the Layer**: Attach the previously created Lambda layer to your function.
5. **Test the Function**: Use the AWS Lambda console to test the function with different actions (start and stop).

## Conclusion

By automating the management of EC2 and RDS instances using AWS Lambda and Amazon EventBridge, you can streamline your operations and ensure that your instances are only running when needed. This not only saves costs but also reduces the manual effort involved in managing these resources. The provided code serves as a basic template that you can extend and customize based on your specific requirements. Additionally, using Lambda layers helps manage dependencies more efficiently and keeps your deployment package size small.

