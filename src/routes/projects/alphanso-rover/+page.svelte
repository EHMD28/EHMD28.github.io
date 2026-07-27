<script>
    import "../projects.css";
    import model from "$lib/assets/main/projects/thumbnails/alphanso-model.png";
    import topView from "$lib/assets/main/projects/physical/alphanso-rover-top-view.jpg";
</script>

<article>
    <h1>Alphanso Rover</h1>
    <p>
        Alphanso is the name of a remote-controlled, mecanum-wheeled rover I
        built. Alphanso was the first ever robot I build indepenendently, so I
        decided to name it after the first letter of the Greek alphabet. The
        chassis was 3D-printed, and the electronics are controlled by a
        DOIT-ESP32-DEVKIT_V1 board. It took about a week in total to design and
        build. The main reason I started the project is because I wanted to
        figure out how mecanum wheels worked. I came across them before, but the
        way they actually functioned was very confusing to me, especially with
        how they could drive in any direction without turning. After this
        project, I felt like I had a much better understanding of mecanum
        drives. Even so, I still went on to develop a drive kinematics
        simulator, in part for myself, and in part for my school's FRC robotics
        team. Below is a demo of the mecanum drive in action.
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7FKzfLMHpqw?si=54Vs61ah4_OBBjKV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
    <br />
    <p>
        I also have some images of the 3D model I created so I could dimension
        the chassis correctly and the physical robot.
    </p>
    <br />
    <div id="image-container">
        <img src={model} width={400} alt="Alphanso Rover 3D model." />
        <img src={topView} width={400} alt="Alphanso Rover top view." />
    </div>
</article>

<style>
    #image-container {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
</style>
