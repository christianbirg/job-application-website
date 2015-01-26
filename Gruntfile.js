module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {

      },
      vendor: {
        files: {
          'public_html/js/vendor.js': [
          'vendor/jquery/dist/jquery.js',
          'vendor/bootstrap-sass-official/assets/javascripts/bootstrap.js',
          'vendor/angular/angular.js',
          'vendor/angular-route/angular-route.min.js',
          'vendor/angular-sanitize/angular-sanitize.min.js',
          'vendor/angular-xeditable/dist/js/xeditable.min.js'
          ]
        }
      },
      src: {
        files: {
          'public_html/js/src.js': [
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
      vendor: {
        options: {
          style: 'compressed'
        },
        files: {
          'public_html/css/vendor.css': 'src/scss/vendor.scss'
        }
      },
      src: {
        options: {
          style: 'compressed'
        },
        files: {
          'public_html/css/src.css': 'src/scss/src.scss'
        }
      }
    },
    copy: {
      'font-awesome': {
        expand: true,
        cwd: 'vendor/font-awesome/fonts/',
        src: '**',
        dest: 'public_html/fonts/',
      },
      'font-bootstrap': {
        expand: true,
        cwd: 'vendor/bootstrap-sass-official/assets/fonts/bootstrap/',
        src: '**',
        dest: 'public_html/fonts/bootstrap',
      },
      'images': {
        expand: true,
        cwd: 'src/img',
        src: '**',
        dest: 'public_html/images/',
      },
    },
    jade: {
      src: {
        options: {
          data: {
            debug: false,
          },
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'src/templates/',
          src: ['**/*.jade'],
          dest: 'public_html/',
          ext: '.html',
        }]
      }
    },
    watch: {
      scss: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass:src'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify:src'],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ['src/templates/**/*.jade'],
        tasks: ['jade:src'],
        options: {
          spawn: false,
        },
      },
    },
    concurrent: {
      dev: {
        tasks: ['watch:scss', 'watch:js', 'watch:html'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('develope', ['uglify', 'sass', 'jade', 'copy', 'concurrent:dev']);

  grunt.registerTask('build', ['uglify', 'sass', 'jade']);

};
