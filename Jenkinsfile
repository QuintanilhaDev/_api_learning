pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
               sh 'npm rebuild'
            }
        }
        stage('Test'){
            steps {
                echo 'Startig app'
                sh 'npm start &'
                echo 'Starting test'
                sh 'curl http://localhost:3000'
            }
        }
    }
}