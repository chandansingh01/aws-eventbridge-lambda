import AWS from 'aws-sdk';

// Initialize AWS clients
const ec2 = new AWS.EC2();
const rds = new AWS.RDS();

// Get environment variables
const EC2_INSTANCE_IDS = process.env.EC2_INSTANCE_ID;
const RDS_INSTANCE_IDS = process.env.RDS_INSTANCE_ID;
const ACTION = (process.env.ACTION || 'stop').toLowerCase();


export const handler = async (event) => {
    try {
        if (ACTION === 'start') {
            await startInstances();
        } else if (ACTION === 'stop') {
            await stopInstances();
        } else {
            return {
                statusCode: 400,
                body: `Invalid ACTION specified: ${ACTION}. Use "start" or "stop".`
            };
        }
        return {
            statusCode: 200,
            body: `Successfully executed ${ACTION} action on specified instances.`
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error executing ${ACTION} action: ${error.message}`
        };
    }
};

const startInstances = async () => {
   
        await ec2.startInstances({ InstanceIds: [EC2_INSTANCE_IDS] }).promise();
        console.log(`Started EC2 instances: ${EC2_INSTANCE_IDS}`);
    
        await rds.startDBInstance({ DBInstanceIdentifier: dbInstanceId }).promise();
        console.log(`Started RDS instance: ${dbInstanceId}`);
    
};

const stopInstances = async () => {
    
        await ec2.stopInstances({ InstanceIds: [EC2_INSTANCE_IDS] }).promise();
        console.log(`Stopped EC2 instances: ${EC2_INSTANCE_IDS}`);
    
        await rds.stopDBInstance({ DBInstanceIdentifier: RDS_INSTANCE_IDS }).promise();
        console.log(`Stopped RDS instance: ${RDS_INSTANCE_IDS}`);
    
};
