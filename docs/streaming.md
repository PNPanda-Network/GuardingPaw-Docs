## Twitch Notifications

To receive notifications from a Twitch streamer, simply go to the Twitch channel you want to receive notifications from and copy the name from the URL. `https://www.twitch.tv/`**thegodlynoob**<br>

![alt text](../assets/images/YdNVGx6W4t.png)

The Default notification message is: <br> `<everyone> <channelname> is now live! Go check it out!!`<br>
You can customize the message by using the following placeholders:<br>
- `<everyone>` - Mentions everyone
- `<channelname>` - The name of the channel

### Preview
![Preview](../assets/images/cAmvfSOs3e.png)


## Discord Command´s

`/notification add channel:#testing channelname:<channelname> type:Twitch`<br> (optional add: `custommessage:<channelname> is now live!`) to set a custom message.<br><br>
`/notification list type:Twitch` - get a list of all notifications.<br>
`/notification remove removechannel:<channelname>` - to remove a notification.<br>
