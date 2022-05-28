module.exports.supported = supported;

function supported() {
  return [
    { "name":"java-vue","backend_version":"java -version","frontend_vrsion":"node -v","git": "" },
    { "name":"java-react","backend_version":"java -version","frontend_vrsion":"node -v","git": "" },
    { "name":"java-angular","backend_version":"java -version","frontend_vrsion":"node -v","git": "" },
    { "name":"node-vue","backend_version":"node -v","frontend_vrsion":"node -v","git": "" },
    { "name":"node-react","backend_version":"node -v","frontend_vrsion":"node -v","git": "" },
    { "name":"node-angular","backend_version":"node -v","frontend_vrsion":"node -v","git": "" },
    { "name":"laravel-vue","backend_version":"php -v","frontend_vrsion":"node -v","git": "https://github.com/Adishrivastava/vue_laravel" },
    { "name":"laravel-react","backend_version":"php -v","frontend_vrsion":"node -v","git": "https://github.com/Adishrivastava/react_laravel" },
    { "name":"laravel-angular","backend_version":"php -v","frontend_vrsion":"node -v","git": "https://github.com/Adishrivastava/angular_laravel" },
    { "name":"flask-vue","backend_version":"flask --version","frontend_vrsion":"node -v","git": "" },
    { "name":"flask-react","backend_version":"flask --version","frontend_vrsion":"node -v","git": "https://github.com/priyanshu1109/flask_react" },
    { "name":"flask-angular","backend_version":"flask --version","frontend_vrsion":"node -v","git": "https://github.com/priyanshu1109/flask_angular.git" },
    { "name":"django-vue","backend_version":"python --version","frontend_vrsion":"node -v","git": "https://github.com/priyanshu1109/django_vue.git" },
    { "name":"django-react","backend_version":"python --version","frontend_vrsion":"node -v","git": "https://github.com/priyanshu1109/django_react/" },
    { "name":"django-angular","backend_version":"python --version","frontend_vrsion":"node -v","git": "https://github.com/priyanshu1109/django_angular.git" },
  ];
}