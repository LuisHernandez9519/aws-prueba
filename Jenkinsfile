pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('TEST') {
            steps {
                sh 'echo  prueba de test'
            }
        }
        stage('DEVELOP') {
            when {
                environment name: 'STAGE_DEPLOY' value: 'DESA'
            }
            steps {
                sh 'serverless deploy --stage $STAGE_DEPLOY'
            }
            /*withAWS(credential: 'ID-profile-aws-tsc-user') {

            }*/
        }
    }
}