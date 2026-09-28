Scroll-linked story timeline (About → "How I Got Here"). A faint rail runs top to bottom; a lime line fills it in step with page scroll and each dot turns lime when reached.

```jsx
<Timeline items={[{ title: 'The Breaking Point', text: '…' }, { title: 'Seeking Stillness', text: '…' }]} />
```

Listens to scroll on any container (capture phase), so it works inside scrolling panels as well as the window.
