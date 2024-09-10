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
                withCredentials([usernamePassword(credentialsId: '46588d57-b03d-4b47-88d2-b3a39a9c0221', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                    sh '''
                    git config user.email ci@example.com
                    git config --global user.name "${GIT_USERNAME}"
                    git config --global user.password "${GIT_PASSWORD}"
                    git tag -d snapshot || true
                    git tag -a snapshot -m \"passed CI\"
                    git push --tags
                    '''
                }
            }
        }
    }
}