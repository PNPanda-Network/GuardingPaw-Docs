# Complete Command Reference

This page contains all available Discord slash commands for Guarding Paw. Commands are organized by feature category for easy navigation.

> [!TIP]
> **Prefer the Web Interface?** All features can also be configured through our user-friendly [Hub](https://guardingpaw.xyz/manage).

## Commands

All commands are listed below, organized by feature category. For detailed descriptions and examples, see the respective feature pages.

## Giveaway System

Easily create and manage giveaways on your Discord server with Guarding Paw. Automate prize draws, set participation requirements, and keep your community engaged. For detailed information, see [Giveaway System](/sites/giveaway.md).

| Command            | Description                    | Required Parameters            | Optional Parameters                                                              |
| ------------------ | ------------------------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| `/giveaway start`  | Start a new giveaway           | `duration`, `prize`, `winners` | `channel`, `description`, `accountage`, `serverage`, `requiredrole`, `pingusers` |
| `/giveaway edit`   | Edit an active giveaway        | `giveawayid`                   | `changeprize`, `description`, `winneramount`, `addtime`, `subtime`               |
| `/giveaway end`    | End a giveaway immediately     | `giveawayid`                   | -                                                                                |
| `/giveaway reroll` | Reroll winners for a giveaway  | `giveawayid`, `howmany`        | -                                                                                |
| `/giveaway status` | Check the status of a giveaway | `giveawayid`                   | -                                                                                |

**Parameter Details:**
- `duration`: How long the giveaway runs (e.g., `1h`, `30m`, `2d`, `1w`)
- `prize`: The item to win
- `winners`: Number of winners (1-20)
- `channel`: Channel for the giveaway (default: current channel)
- `description`: Extra info for the giveaway
- `accountage`: Minimum account age in days (1-365)
- `serverage`: Minimum server membership in days (1-365)
- `requiredrole`: Role required to participate
- `pingusers`: Whether to ping winners at the end (true/false)

---

## Temporary Voice Channels

Create dynamic voice channels that automatically manage themselves. For detailed information, see [Temporary Voice Channels](/sites/temporary-voice-channels.md).

| Command         | Description                               | Required Parameters          | Optional Parameters |
|-----------------|-------------------------------------------|------------------------------|--------------------|
| `/voice setup`  | Setup temporary voice channels            | `masterchannel`, `category`  | `channel`          |
| `/voice list`   | List all active temporary voice channels  | -                            | -                  |
| `/voice remove` | Delete a specific temporary voice channel | `voiceid`                    | -                  |

**Parameter Details:**
- `masterchannel`: The master channel for creating temporary channels.
- `category`: The category for temporary channels.
- `channel`: Custom name pattern (e.g., `My Room #`).
- `voiceid`: ID of the temporary voice channel to remove.

---

## Audit Logging

Track and monitor server events. For detailed information, see [Audit Logging](/sites/logging.md).

| Command     | Description                           | Required Parameters | Optional Parameters |
|-------------|---------------------------------------|---------------------|--------------------|
| `/auditlog` | Configure logging events and channels | -                   | -                  |

**Parameter Details:**
- No parameters required. Use the command to open the configuration menu.

---


---

## Reaction Roles

Interactive role assignment system. For detailed information, see [Reaction Roles](/sites/reaction-roles.md).

| Command                   | Description                      | Required Parameters                | Optional Parameters                  |
|---------------------------|----------------------------------|------------------------------------|--------------------------------------|
| `/reactionrole setup`     | Create a new reaction role panel | `channel`, `type`                  | -                                    |
| `/reactionrole add`       | Add a role to an existing panel  | `role`, `panelid`                  | `description`, `emoji`, `color`      |
| `/reactionrole list`      | List all reaction role panels    | -                                  | -                                    |
| `/reactionrole edit`      | Edit panel appearance            | `panelid`                          | -                                    |
| `/reactionrole remove`    | Remove a role from panel         | `role`, `panelid`                  | -                                    |
| `/reactionrole uninstall` | Delete entire panel              | `panelid`                          | -                                    |

**Parameter Details:**
- `channel`: The channel for the reaction role panel.
- `type`: Type of panel (`selectmenu` or `button`).
- `role`: The role to add/remove.
- `panelid`: ID of the panel.
- `description`: Description for the role.
- `emoji`: Emoji for the role.
- `color`: Color for the button (Primary, Secondary, Success, Danger).

**Available Colors:** `Primary`, `Secondary`, `Success`, `Danger`

---

## Notifications

Stay updated with content creator activities. For detailed information, see [Notifications](/sites/streaming.md).

| Command                | Description                  | Required Parameters | Optional Parameters |
|------------------------|------------------------------|---------------------|--------------------|
| `/notification add`    | Add a new notification       | -                   | -                  |
| `/notification list`   | List notifications by type   | `type`              | -                  |
| `/notification remove` | Remove a notification        | `removechannel`     | -                  |

**Parameter Details:**
- `type`: Type of notification (`Twitch` or `YouTube`).
- `removechannel`: Name of the channel to remove.

**Message Placeholders:**
- `<everyone>` - Mentions everyone
- `<channelname>` - Name of the content creator

**Supported Platforms:** YouTube, Twitch

## Ticket System

Professional support ticket management. For detailed information, see [Ticket System](/sites/ticket-system.md).

| Command            | Description              | Required Parameters     | Optional Parameters |
|--------------------|--------------------------|-------------------------|--------------------|
| `/ticket setup`    | Create a new ticket panel| `channel`, `category`, `role` | -                  |
| `/ticket list`     | List all ticket panels   | -                       | -                  |
| `/ticket remove`   | Remove a ticket panel    | `panel`                 | -                  |
| `/ticket adduser`  | Add user to current ticket | `user`                | -                  |
| `/ticket removeuser`| Remove user from current ticket | `user`            | -                  |

**Parameter Details:**
- `channel`: The channel for the ticket panel.
- `category`: The category for tickets.
- `role`: The staff role.
- `panel`: ID of the panel to remove.
- `user`: The user to add/remove.

**Features:**
- Automatic transcript generation
- Staff role permissions
- Category organization

---

## Server Statistics

Automatically display server statistics in voice channels that update in real-time. Track member counts, channels, roles, and more with customizable formats. For detailed information, see [Server Statistics](/sites/serverstatistics.md).

| Command                | Description                          | Required Parameters                  | Optional Parameters |
|------------------------|--------------------------------------|--------------------------------------|---------------------|
| `/statistics setup`    | Setup a server statistics counter    | `channel`, `type`                    | `format`            |
| `/statistics bulksetup`| Setup multiple counters automatically| -                                    | `category`          |
| `/statistics list`     | List all server statistics           | -                                    | -                   |
| `/statistics remove`   | Remove a statistics counter          | `channel`                            | -                   |
| `/statistics update`   | Force update all statistics          | -                                    | -                   |

**Parameter Details:**
- `channel`: Voice channel to use as counter
- `type`: Type of counter (`members`, `bots`, `total_members`, `channels`, `voice_channels`, `text_channels`, `roles`)
- `format`: Custom format using `{count}` and `{type}` placeholders (default formats applied if not provided)
- `category`: Category for bulk setup (new category created if not provided)

---

## Utility Commands

General bot functions:

| Command  | Description                     | Required Parameters | Optional Parameters |
|----------|---------------------------------|---------------------|--------------------|
| `/help`  | Display all available commands  | -                   | -                  |
| `/clear` | Clear chat messages             | -                   | -                  |
| `/invite`| Get bot invite link             | -                   | -                  |
| `/vote`  | Vote for the bot on top.gg      | -                   | -                  |

**Notes:**
- `/clear`: Limited to last 14 days (Discord limitation).
- `/vote`: Support the bot!

> **Need Help?** Join our [support server](https://pnnet.dev/discord) for assistance with any commands or features.
