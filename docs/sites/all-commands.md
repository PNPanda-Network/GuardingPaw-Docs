# Complete Command Reference

This page contains all available Discord slash commands for Guarding Paw. Commands are organized by feature category for easy navigation.

> [!TIP]
> **Prefer the Web Interface?** All features can also be configured through our user-friendly [Hub](https://guardingpaw.xyz/manage).

## Temporary Voice Channels

Create dynamic voice channels that automatically manage themselves:

| Command         | Description                               | Example                                 |
| --------------- | ----------------------------------------- | --------------------------------------- |
| `/voice setup`  | Setup temporary voice channels            | `/voice setup masterchannel: category:` |
| `/voice list`   | List all active temporary voice channels  | `/voice list`                           |
| `/voice remove` | Delete a specific temporary voice channel | `/voice remove voiceid:`                |

**Optional Parameters for Setup:**
- `channel:` - Set a custom name pattern for temporary channels (e.g., `channel:My Room #`)

---

## Audit Logging

Track and monitor server events:

| Command     | Description                                     |
| ----------- | ----------------------------------------------- |
| `/auditlog` | Configure event logging and set the log channel |

**Features:**
- Monitor user joins/leaves
- Track role changes
- Log message deletions and edits
- Voice channel activity tracking

---

## Reaction Roles

Interactive role assignment system:

| Command                   | Description                      | Parameters                                          |
| ------------------------- | -------------------------------- | --------------------------------------------------- |
| `/reactionrole setup`     | Create a new reaction role panel | `channel:` `type:<selectmenu/button>`               |
| `/reactionrole add`       | Add a role to an existing panel  | `role:` `panelid:` `description:` `emoji:` `color:` |
| `/reactionrole list`      | List all reaction role panels    | -                                                   |
| `/reactionrole edit`      | Edit panel appearance            | `panelid:` (Title, Description, Color)              |
| `/reactionrole remove`    | Remove a role from panel         | `role:` `panelid:`                                  |
| `/reactionrole uninstall` | Delete entire panel              | `panelid:`                                          |

**Available Colors:** `Primary`, `Secondary`, `Success`, `Danger`

---

## Notifications

Stay updated with content creator activities:

| Command | Description | Supported Platforms |
|---------|-------------|-------------------|
| `/notification add` | Add a new notification | YouTube, Twitch |
| `/notification list` | List notifications by type | `/notification list type:Twitch` or `type:YouTube` |
| `/notification remove` | Remove a notification | `/notification remove removechannel:channelname` |

**Message Placeholders:**
- `<everyone>` - Mentions everyone
- `<channelname>` - Name of the content creator

---

## Ticket System

Professional support ticket management:

| Command | Description | Required Parameters |
|---------|-------------|-------------------|
| `/ticket setup` | Create a new ticket panel | `channel:` `category:` `role:` |
| `/ticket list` | List all ticket panels | - |
| `/ticket remove` | Remove a ticket panel | `panel:` |
| `/ticket adduser` | Add user to current ticket | `user:` |
| `/ticket removeuser` | Remove user from current ticket | `user:` |

**Features:**
- Automatic transcript generation
- Staff role permissions
- Category organization

---

## Utility Commands

General bot functions:

| Command | Description | Notes |
|---------|-------------|-------|
| `/help` | Display all available commands | - |
| `/clear` | Clear chat messages | Limited to last 14 days (Discord limitation) |
| `/invite` | Get bot invite link | - |
| `/vote` | Vote for the bot on top.gg | Support the bot! |

---

> **Need Help?** Join our [support server](https://pnnet.dev/discord) for assistance with any commands or features.
