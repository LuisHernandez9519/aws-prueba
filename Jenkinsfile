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
        stage('TEST') {
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
                sh 'serverless config credentials --provider aws --key AKIAU252MOSJCUIRBX5W --secret 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'
                sh 'serverless deploy'
            }
            /*withAWS(credential: 'ID-profile-aws-tsc-user') {

            }*/
        }
    }
}