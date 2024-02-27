import * as elements from 'typed-html';
import BaseHtml from './BaseHtml';

export default () => (
    <BaseHtml>
        <form
            hx-post="/api/user"
            hx-swap="outerHTML"
            class="flex flex-col gap-2"
        >
            <label for="name">Email</label>
            <input
                type="text"
                id="name"
                name="name"
                class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
            />
            <label for="name">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
            />
            <button
                type="submit"
                class="border rounded-lg solid border-white/35 p-2 bg-white/15 hover:bg-white/25 focus:bg-white/25 active:bg-white/35 transition-colors duration-200 ease-in-out"
            >
                Submit
            </button>
        </form>
    </BaseHtml>
);
