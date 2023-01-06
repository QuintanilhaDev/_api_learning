pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
               sh 'npm rebuild'
            }
        }
        stage('Starting App') {
            steps {
                sh 'npm start'
            }
        }
    }
}