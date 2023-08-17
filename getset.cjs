const { MedicalImagingClient, GetImageSetMetadataCommand } = require('@aws-sdk/client-medical-imaging');

const params = {
  datastoreId: '558dfda9fc544f6eb7c16d166033884b', /* required */
  imageSetId: '2d235f29f435a0b7a610158efa2d7823' /* required */
};

// Set the AWS region in your configuration
const client = new MedicalImagingClient({ region: 'us-east-1' });

const command = new GetImageSetMetadataCommand(params);

client.send(command)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });



  