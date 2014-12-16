/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    // Default task(s).
    // A very basic default task.
    grunt.registerTask('money', 'Testing Money kata code', function() {
        var done = this.async();

        grunt.log.write('jsHinit all js in the directory and start karma task and watch...').ok();
        grunt.task.run(['jshint','karma','watch']);
        done();
    });
};