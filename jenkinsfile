pipeline {
    agent any
    stages {
        stage('Build Image') {
            steps {
                sh 'docker build --network host -t my-backend .'
            }
        }
        stage('Cleanup Old Container') {
            steps {
                sh 'docker stop express-app || true'
                sh 'docker rm express-app || true'
            }
        }
        stage('Deploy New Version') {
            steps {
                sh 'docker run -d --name express-app -p 3000:3000 my-backend'
            }
        }
    }
}