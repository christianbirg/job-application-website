module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourcemap: true,
        beautify: false,
        mangle: false,
        compress: false,
      },
      'libraries': {
        files: {
          'public_html/js/libs.js': [
            'src/libs/jquery/dist/jquery.js',
            'src/libs/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'src/libs/angular/angular.js',
            'src/libs/angular-route/angular-route.min.js',
            'src/libs/angular-sanitize/angular-sanitize.min.js',
            'src/libs/angular-xeditable/dist/js/xeditable.min.js'
          ]
        }
      },
      'application': {
        files: {
          'public_html/js/app.js': [
            'src/js/app/main.js',
            'src/js/app/run.js',
            'src/js/app/routes.js',
            'src/js/app/services/DataService.js',
            'src/js/app/directives/RatingBarDirective.js',
            'src/js/app/directives/TimelineDirective.js',
            'src/js/app/directives/TooltipDirective.js',
            'src/js/app/controllers/IndexController.js',
            'src/js/app/controllers/CurriculumController.js',
            'src/js/app/controllers/ApplicationController.js',
            'src/js/app/controllers/SkillPageController.js'
          ]
        }
      }
    },
    sass: {
      'sass-compile': {
        options: {
          style: 'compressed'
        },
        files: {
          'public_html/css/style.css': ['src/sass/style.scss'],
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        options: {
          spawn: true,
        },
        files: ['src/js/**/*.js'],
        tasks: ['uglify:application']
      },
      scss: {
        options: {
          spawn: true,
        },
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('listen', ['uglify', 'sass','watch']);
  grunt.registerTask('libraries', ['uglify:libraries']);

};
