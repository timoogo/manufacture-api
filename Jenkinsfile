pipeline {
  agent any

  stages {
    stage('Installation') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Image Docker') {
      steps {
        sh 'docker build -t manufacture-api:jenkins-${BUILD_NUMBER} .'
      }
    }
  }

  post {
    success { echo 'Bravo, tout est vert !' }
    failure { echo 'Echec : ouvrez Console Output pour comprendre' }
  }
}