import AWS from 'aws-sdk'

const params = {
    region:'us-east-1'
}
const medicalImaging = new AWS.MedicalImaging(params)

const main = async () => {
    try {
        const result = await medicalImaging.getImageFrame({
            datastoreId: '558dfda9fc544f6eb7c16d166033884b',
            imageSetId: '2d235f29f435a0b7a610158efa2d7823',
            imageFrameInformation: {imageFrameId : '7a3d2b7157d1c2fd575f8992c5061f00'}
        }).promise()
        console.log(result)
    }
    catch(err) {
        console.log(err)
    }
}

