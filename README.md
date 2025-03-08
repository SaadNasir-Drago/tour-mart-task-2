# Running the Flight Itinerary UI on Your Machine


### 1. Clone the repo to your machine and move to the my-flight-app directory

```shellscript
git clone <URL>
cd my-flight-app
```


### 2. Install Required Dependencies

```shellscript
npm install
```

### 3. Set Up shadcn/ui Components

Install the shadcn CLI:

```shellscript
npm install -D @shadcn/ui
```

Initialize shadcn/ui:

```shellscript
npx shadcn@latest init
```

Add the Button component:

```shellscript
npx shadcn@latest add button
```

### 4. Run the Development Server

```shellscript
npm run dev
```

Then open your browser and navigate to:

```plaintext
http://localhost:3000/flight-itinerary
```
