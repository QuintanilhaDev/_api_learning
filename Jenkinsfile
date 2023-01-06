pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
               sh 'npm rebuild'
               sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                echo 'Testing the process...'
                sh 'npm test'
            }
        }
    }
}