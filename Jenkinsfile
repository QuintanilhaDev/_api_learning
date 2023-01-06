pipeline {
    stages {
        stage('Build') {
            steps {
                echo "Building the App"
                npm rebuild
            }
        }
        stage('Start the app') {
            npm start
        }
    }
}