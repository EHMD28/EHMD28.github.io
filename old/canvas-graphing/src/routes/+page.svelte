<script lang="ts">
    import { createContext, onMount } from "svelte";

    interface CanvasDimensions {
        width: number;
        height: number;
        halfWidth: number;
        halfHeight: number;
        mouseXOffset: number;
        mouseYOffset: number;
    }

    function getDimensionsFromCanvas(
        canvas: HTMLCanvasElement,
    ): CanvasDimensions {
        return {
            width: canvas.width,
            height: canvas.height,
            halfWidth: canvas.width / 2,
            halfHeight: canvas.height / 2,
            mouseXOffset: 0,
            mouseYOffset: 0,
        };
    }

    interface Point2D {
        x: number;
        y: number;
    }

    let canvas: HTMLCanvasElement;

    onMount(() => {
        canvas.width = 500;
        canvas.height = 500;
        let ctx = canvas.getContext("2d");
        if (ctx !== null) {
            let canvasDimensions = getDimensionsFromCanvas(canvas);
            setInterval(() => draw(ctx, canvasDimensions), 50);
        }
    });

    function clearCanvas(
        ctx: CanvasRenderingContext2D,
        dimensions: CanvasDimensions,
    ) {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    }

    function draw(ctx: CanvasRenderingContext2D, dimensions: CanvasDimensions) {
        clearCanvas(ctx, dimensions);
        drawAxes(ctx, dimensions);
        const xValues = Array.from({ length: 400 }, (x, i) => i - 200);
        const points: Point2D[] = xValues.map((x) => {
            return {
                x,
                y: 50 * Math.sin(x / 20),
            };
        });
        drawCurveFromPoints(ctx, dimensions, points);
    }

    /* Plotting Functions */

    function drawAxes(
        ctx: CanvasRenderingContext2D,
        dimensions: CanvasDimensions,
    ) {
        /* Grid Lines */
        ctx.strokeStyle = "lightgray";
        ctx.lineWidth = 1;
        for (let i = 10; i < canvas.width; i += 20) {
            // Horizontal gridline
            drawLine(ctx, 0, i, dimensions.width, i);
            // Vertical gridline
            drawLine(ctx, i, 0, i, dimensions.height);
        }
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        // X-Axis
        drawLine(
            ctx,
            0,
            dimensions.halfHeight,
            dimensions.width,
            dimensions.halfHeight,
        );
        // Y-Axis
        drawLine(
            ctx,
            dimensions.halfWidth,
            0,
            dimensions.halfWidth,
            dimensions.height,
        );
    }

    function drawCurveFromPoints(
        ctx: CanvasRenderingContext2D,
        dimensions: CanvasDimensions,
        points: Point2D[],
    ) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        for (const point of points) {
            let canvasX = cartesianToCanvasX(point.x, dimensions);
            let canvasY = cartesianToCanvasY(point.y, dimensions);
            ctx.lineTo(canvasX, canvasY);
        }
        ctx.stroke();
    }

    /* Utility Functions */

    function drawLine(
        ctx: CanvasRenderingContext2D,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
    ) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function cartesianToCanvasX(cx: number, dimensions: CanvasDimensions) {
        return cx + dimensions.halfWidth;
    }

    function canvasToCartesianX(x: number, dimensions: CanvasDimensions) {
        return x - dimensions.halfWidth;
    }

    function cartesianToCanvasY(cy: number, dimensions: CanvasDimensions) {
        return dimensions.halfHeight - cy;
    }

    function canvasToCartesianY(y: number, dimensions: CanvasDimensions) {
        return dimensions.halfHeight - y;
    }
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        border: 2px solid black;
    }
</style>
