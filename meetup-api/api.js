var meetup = require('../lib/meetup')({
  key: '261a654350301557125f715619664b'
})


For OAuth you've to request the requestToken and then the accessToken
var meetup = require('../lib/meetup')({
	oauth: JSON.parse(process.env.MEETUP_OAUTH)
});
and then

meetup.getOAuthRequestToken(function(error, Url) {
	response.writeHead(302, {
		'Location': Url
	});
	response.end();
});
after recive the OAuth access token

meetup.getOAuthAccessToken(oauth_token, function() {
	//API commands goes here
});