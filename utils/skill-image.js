import aws from '/public/svg/skills/aws.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import firebase from '/public/svg/skills/firebase.svg';
import gcp from '/public/svg/skills/gcp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import markdown from '/public/svg/skills/markdown.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import pandas from '/public/svg/skills/pandas.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import redis from '/public/svg/skills/redis.svg';
import sockets from '/public/svg/skills/sockets.svg';
import flask from '/public/svg/skills/flask.svg';
import fastAPI from '/public/svg/skills/fastapi.svg';
import apacheAirflow from '/public/svg/skills/apacheairflow.svg';
import apacheKafka from '/public/svg/skills/apachekafka.svg';
import rabbitMQ from '/public/svg/skills/rabbitmq.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'aws':
      return aws;
    case 'bootstrap':
      return bootstrap;
    case 'cplusplus':
      return cplusplus;
    case 'css':
      return css;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'firebase':
      return firebase;
    case 'gcp':
      return gcp;
    case 'git':
      return git;
    case 'go':
      return go;
    case 'graphql':
      return graphql;
    case 'html':
      return html;
    case 'javascript':
      return javascript;
    case 'markdown':
      return markdown;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'pandas':
      return pandas;
    case 'postgresql':
      return postgresql;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'redis':
      return redis;
    case 'sockets':
      return sockets;
    case 'flask':
      return flask;
    case 'fastapi':
      return fastAPI;
    case 'apache airflow':
      return apacheAirflow;
    case 'apache kafka':
      return apacheKafka;
    case 'rabbitmq':
      return rabbitMQ;
    default:
      break;
  }
}
