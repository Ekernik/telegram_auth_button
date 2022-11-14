# Telegram Authentication with your custom Button

Demo - https://ekernik.github.io/telegram_auth_button

## How to use

1. Add telegram script tag in the head tag.

```HTML
<script src='https://telegram.org/js/telegram-widget.js?21' async></script>
```

2. Create your own button element with custom styling.
3. Pass handleAuth function to onClick event.

## Running Dev Server

```
npm start
```

And then go to http://0.0.0.0:8080

## Notes

- Telegrams widgets docs: https://core.telegram.org/widgets/login
- Button will not work on localhost:3000, you have to start server on port 8080 and open it with http://0.0.0.0:8080.
- Don't forget to create your own Bot, run /setdomain command in telegram and change BOT_ID in handleAuth.ts file when using in production.
