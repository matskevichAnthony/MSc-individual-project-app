POST /auth/login - authent
POST /auth/register - registration
GET /auth/me - user profile info
PUT /auth/me - update user profile

Header required:
Authorization: Bearer ${token}

GET /events - list
GET /events?managed=1 - managed events
GET /events?attends=1 - attends events
GET /events/${id} - single event
GET /events/${id}/join - join to event
GET /events/${id}/leave - leave event
POST /events - create event
PUT /events/${id} - edit
DELETE /events/${id} - delete event

GET /event-type - list of event type

GET /preferences - list current user preferences
PUT /preferences - update current user preferences

Not ready:

Set user preferences from registration
