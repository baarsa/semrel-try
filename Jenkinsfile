pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Tagging') {
            when { branch 'master' }
            steps {
                sh '''
                  git fetch --all
                  nv=$(npm run get-next-version --silent)
                  git tag $nv
                  git push --tags
                '''
            }
        }
    }
}