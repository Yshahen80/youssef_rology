import AWS from 'aws-sdk'
import util from 'util'

const params = {
    region:'us-east-1'
}
const medicalImaging = new AWS.MedicalImaging(params)

const main = async () => {
    try {
        const result = await medicalImaging.searchImageSets({
            datastoreId: '558dfda9fc544f6eb7c16d166033884b',
            searchCriteria: {
                filters: [{
                    values: [{DICOMPatientId: "23885"}],
                    operator: "EQUAL"
                }]
            }
        }).promise()
        console.log(util.inspect(result, false, null, true /* enable colors */))
    }
    catch(err) {
        console.log(err)
    }
}

main()
