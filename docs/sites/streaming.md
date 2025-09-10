# Twitch Notifications

To receive notifications from a Twitch streamer, simply go to the Twitch channel you want to receive notifications from and copy the name from the URL: `https://www.twitch.tv/`**thegodlynoob**





## Commands

| Command                | Description                | Required Parameters | Optional Parameters |
| ---------------------- | -------------------------- | ------------------- | ------------------- |
| `/Notification add`    | Add a new Notification     | -                   | -                   |
| `/Notification list`   | List notifications by type | `type`              | -                   |
| `/Notification remove` | Remove a Notification      | `removechannel`     | -                   |

**Parameter Details:**
- `type`: Type of Notification (`Twitch` or `YouTube`).
- `removechannel`: Name of the channel to remove.

**Supported Types:** Twitch, YouTube

## Message Customization

The default Notification message is:
```
<everyone> <channelname> is now live! Go check it out!!
```

You can customize the message by using the following placeholders:
- `<everyone>` - Mentions everyone
- `<channelname>` - The name of the channel

## Preview

Below are some preview images to help you understand the process:



| ![Twitch Channel Name Example](../assets/images/Notification/TwitchChannelNameExample.png) | ![Active Twitch Notifications](../assets/images/Notification/ActiveTwitchNotifications.png) |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
|                                                                                            |                                                                                             |


| ![Notification Discord Select](../assets/images/Notification/Notification_Discord_Select.png)   | ![Twitch Name Entry](../assets/images/Notification/twitch/Notification_Discord_Twitchname.png)     |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![Discord Channel Select](../assets/images/Notification/Notification_Discord_Channel.png)       | ![Twitch Final Setup](../assets/images/Notification/twitch/Notification_Discord_Final.png)         |
| ![Twitch Notification List](../assets/images/Notification/twitch/Notification_Discord_List.png) | ![Live Notification Preview](../assets/images/Notification/twitch/Notification_Discord_Result.png) |
|                                                                                                 |                                                                                                    |











> **Need Help?** Join our [support server](https://pnnet.dev/discord) for assistance with any commands or features.
