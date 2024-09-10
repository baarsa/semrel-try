pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Tagging') {
            steps {
                sh "git tag -a snapshot -m \"passed CI\""
                sh "git push --tags"
            }
        }
    }
}