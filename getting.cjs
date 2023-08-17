const { MedicalImagingClient, GetImageSetCommand } = require('@aws-sdk/client-medical-imaging');

const params = {
  datastoreId: '558dfda9fc544f6eb7c16d166033884b',
  imageSetId: '2d235f29f435a0b7a610158efa2d7823',
  versionId: '1'
};

// Set the AWS region in your configuration
const client = new MedicalImagingClient({ region: 'us-east-1' });

const command = new GetImageSetCommand(params);

client.send(command)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

