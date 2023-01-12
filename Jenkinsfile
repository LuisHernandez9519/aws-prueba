pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('INSTALL DEPENDENCIE') {
            steps {
                sh 'npm install'
            }
        }
        stage('UNIT TEST') {
            steps {
                sh 'echo  prueba de test'
            }
        }
        stage('DEVELOP') {
            /*when {
                environment name: 'STAGE_DEPLOY', value: 'DESA'
            }*/
            environment {
                STAGE_DEPLOY = 'DESA'
            }
            steps {
                sh 'npm install -g serverless'
                //sh 'serverless config credentials --provider aws --key ${aws_access_key_id} --secret ${aws_secret_access_key}'
                sh 'serverless deploy --verbose --aws-profile prueba-aws' 
            }
            /*withAWS(credential: 'ID-profile-aws-tsc-user') {

            }*/
        }
    }
}