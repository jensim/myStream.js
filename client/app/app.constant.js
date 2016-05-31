(function(angular, undefined) {
  angular.module("myStreamJsApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);