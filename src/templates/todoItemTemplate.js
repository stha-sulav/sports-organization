import { templateCreator } from "../utils/templateCreator.js";

const content = `

<style>
    label{
        color: red;
        display: block; 
    }
    .description{
        font-size: 0.65erm;
        color: #777;
    }
</style>
    <label>
        <input type="checkbox" />
        <slot></slot>
        <span class="description">
            <slot name="desc"></slot>
        </span>
    </label>
`;

export const todoItemTemplate = templateCreator(content);
