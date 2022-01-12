# mijin web

> Official [mijin](https://github.com/lecoueyl/mijin) documentation
## Build Setup

```bash
# clone this repository
git clone https://github.com/lecoueyl/mijin.web.git

# install dependencies
pnpm install

# serve with hot reload at localhost:3000
pnpm run dev

# generate static project
pnpm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## mijin development

This setup can also be a good place to develop and improve
[mijin](https://github.com/lecoueyl/mijin):

1. Clone mijin and documentation repository

```bash
git clone https://github.com/lecoueyl/mijin.git
git clone https://github.com/lecoueyl/mijin.web.git
```

2. Use link to use the local package repository for development

```bash
# use the local mijin package instead of the one in registry
pnpm run link:mijin
```

3. Remove the link before releasing the changes

```bash
pnpm run link:mijin:remove
```
