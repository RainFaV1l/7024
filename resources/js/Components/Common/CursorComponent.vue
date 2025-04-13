<script setup>
import {onMounted} from "vue";

onMounted(() => {
    let cursorBall = document.querySelector(".cursor-ball");
    let cursorOutline = document.querySelector(".cursor-outline");

    document.addEventListener("mousemove", (e) => {
        cursorBall.style.top = e.pageY + "px";
        cursorBall.style.left = e.pageX + "px";

        cursorOutline.style.top = e.pageY + "px";
        cursorOutline.style.left = e.pageX + "px";
    });

    document.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
            cursorOutline.classList.add("cursor-mousedown");
        }
    });

    document.addEventListener("mouseup", () => {
        cursorOutline.classList.remove("cursor-mousedown");
    });

    let links = document.querySelectorAll(".link");

    links.forEach((link) => {
        link.addEventListener("mouseover", () => {
            cursorOutline.classList.add("scale-link");
            link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            cursorOutline.classList.remove("scale-link");
            link.classList.remove("hovered-link");
        });
    })
})
</script>

<template>
    <div class="cursor-ball"></div>
    <div class="cursor-outline"></div>
</template>

<style>
.cursor-mousedown {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #000;
    background-color: #8454f4;
    transform-origin: 130% 100%;
}

.cursor-ball {
    width: 8px;
    height: 8px;
    background-color: white;
}

.cursor-outline {
    width: 3rem;
    height: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.5s ease;
}

.cursor-ball,
.cursor-outline {
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    pointer-events: none;
    transform: translate(-50%, -50%)
}

.cursor-mousedown {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #000;
    background-color: white;
}

.scale-link {
    transform: scale(1.5);
    background: #000;
}

.hovered-link {
    color: #fff;
}

a.hovered-link {
    color: #fff;
}

body {
    cursor: none;
}
</style>
