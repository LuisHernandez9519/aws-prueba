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
                sh 'serverless deploy'
            }
            /*withAWS(credential: 'ID-profile-aws-tsc-user') {

            }*/
        }
    }
}