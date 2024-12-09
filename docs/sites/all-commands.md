### Temporary Voice Commands
- `/voice setup masterchannel:#"➕┃Temp Voice" category:#"Voicetest"`<br> (Optional) - Set a custom channel name for the temporary voice channels. `channel:YESSIR`<br>
- `/voice list` - List all temporary voice channels.
- `/voice remove voiceid:<ID>` - Delete a temporary voice channel.

### Audit Log Commands
- `/auditlog` - Configure event logging and the log channel.

### Reaction Role Commands
- `/reactionrole setup channel: type:<selectmenu / button>` - Setup a new reaction role panel.
- `/reactionrole add role: panelid:` (optional) - `description:Yes Sir emoji: color:`* - Add a role to the panel.
- `/reactionrole list` - List all reaction role panels.
- `/reactionrole edit panelid:` - Edit a reaction role panel (Title, Description, Color).
- `/reactionrole remove role: panelid:` - Remove a role from the panel.
- `/reactionrole unistall panelid:` - Delete a reaction role panel.

### Notification Commands
- `/notification add` - Add a new notification.
- `/notification list type:Twitch/YouTube` - List all notifications.
- `/notification remove removechannel:<channelname>` - Remove a notification.

### Ticket System Commands
- `/ticket setup channel: category: role:` - Setup a new ticket panel.
- `/ticket list` - List all ticket panels.
- `/ticket remove panel:` - Remove a ticket panel.
- `/ticket adduser user:` - Add a user to the ticket.
- `/ticket removeuser user:` - Remove a user from the ticket.

### Miscellaneous Commands
- `/help` - List all commands.
- `/clear` - Clear the chat (last 14 days only, Discord limitation).
- `/invite` - Get the bot invite link.
- `/vote` - Vote for the bot on top.gg.
