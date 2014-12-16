/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    // Default task(s).
    // A very basic default task.
    grunt.registerTask('default', 'Start the default tasks', function() {
        grunt.log.write('Start default tasks...').ok();
        grunt.task.run(['money']);
    });
};