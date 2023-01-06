pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building the App"
                sh 'npm rebuild'
            }
        }
        stage('Start the app') {
            sh 'npm start'
        }
    }
}