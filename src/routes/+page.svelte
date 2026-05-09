<script>
    import { resolve } from "$app/paths";
    import "highlight.js/styles/github-dark.css";
    import hljs from "highlight.js/lib/core";
    import javaLang from "highlight.js/lib/languages/java";
    import articulatedSnakeImage from "$lib/assets/main/projects/articulated-snake-assembly.png";
    import { onMount } from "svelte";

    hljs.registerLanguage("java", javaLang);

    onMount(() => {
        hljs.highlightAll();
    });
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<article>
    <header>
        <h1>Welcome to my website</h1>
        <br />
    </header>
    <main>
        <section class="text-and-figure">
            <p>
                My name is El Hajj Malick Diagne, and I am an amateur engineer
                and physicist. My main interests are in robotics, control
                systems, electronics, and computational physics. I am currently
                an early-college experience student at The Ohio State University
                and a member of First Robotics Team 3324, The Metrobots. My goal
                is to major in robotics engineering, if the university offers
                it, or electrical and computer engineering. I am always looking
                to learn something new and expand my skill set. I am currently
                learning how to design printed circuit boards and create mobile
                apps using Jetpack Compose.
            </p>
            <div class="code-and-caption">
                <pre><code class="language-java"
                        >package frc.robot.subsystems.drivetrain;

import com.studica.frc.AHRS;
import com.studica.frc.AHRS.NavXComType;

import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.DriveConstants;

/**
    * The robot uses four swerve modules in a square configuration. The code is based on the template
    * provided by Rev Robotics at https://github.com/REVrobotics/MAXSwerve-Java-Template/tree/main.
    */
public class DrivetrainSubsystem extends SubsystemBase &lbrace;
    private final SwerveModule frontLeft = new SwerveModule(
            DriveConstants.frontLeftDrivingId,
            DriveConstants.frontLeftTurningId,
            DriveConstants.frontLeftAngularOffset);
    private final SwerveModule frontRight = new SwerveModule(
            DriveConstants.frontRightDrivingId,
            DriveConstants.frontRightTurningId,
            DriveConstants.frontRightAngularOffset);
    private final SwerveModule backRight = new SwerveModule(
            DriveConstants.backRightDrivingId,
            DriveConstants.backRightTurningId,
            DriveConstants.backRightAngularOffset);
    private final SwerveModule backLeft = new SwerveModule(
            DriveConstants.backLeftDrivingId,
            DriveConstants.backLeftTurningId,
            DriveConstants.backLeftAngularOffset);

    /** The robot uses a Studica NavX2 MXP IMU accelerometer connected to the MXP port on the RoboRio.
        * All measurements are given in terms of degrees. */
    private final AHRS gyro = new AHRS(NavXComType.kMXP_SPI);

    public DrivetrainSubsystem() &lbrace;
        zeroHeading();
    &rbrace;

    /**
        * Drive the robot using inputs from the joysticks. The x-speed is from the x-axis of the left joystick.
        * The y-speed (left-to-right) is from the y-axis of the left joystick. The rotation is from the y-axis
        * of the right joystick.
        * 
        * @param xSpeed The speed of the robot in the x-direction (front-to-back) on a [-1.0, 1.0] scale.
        * @param ySpeed The speed of the robot in the y-direction (left-to-right) on  a [-1.0, 1.0] scale.
        * @param rot The rotation of the robot on a [-1.0, 1.0] scale.
        * @param fieldRelative Whether or not to drive the robot relative the current field.
        */
    public void drive(double xSpeed, double ySpeed, double rot, boolean fieldRelative) &lbrace;
        // Convert the commanded speeds into the correct units for the drivetrain
        double xSpeedDelivered = xSpeed * DriveConstants.maxSpeed;
        double ySpeedDelivered = ySpeed * DriveConstants.maxSpeed;
        double rotDelivered = rot * DriveConstants.maxAngularSpeed;

        var swerveModuleStates = DriveConstants.driveKinematics.toSwerveModuleStates(
                fieldRelative
                        ? ChassisSpeeds.fromFieldRelativeSpeeds(xSpeedDelivered,
                                ySpeedDelivered,
                                rotDelivered,
                                getHeading())
                        : new ChassisSpeeds(xSpeedDelivered, ySpeedDelivered, rotDelivered));
        setModuleStates(swerveModuleStates);
    &rbrace;

    /**
        * Sets the state of each module.
        * 
        * @param desiredStates An array of SwerveModuleStates in the order [frontLeft, frontRight,
        * backLeft, backRight].
        */
    public void setModuleStates(SwerveModuleState[] desiredStates) &lbrace;
        SwerveDriveKinematics.desaturateWheelSpeeds(desiredStates, DriveConstants.maxSpeed);
        frontLeft.setDesiredState(desiredStates[0]);
        frontRight.setDesiredState(desiredStates[1]);
        backLeft.setDesiredState(desiredStates[2]);
        backRight.setDesiredState(desiredStates[3]);
    &rbrace;

    /**
        * Calls the resetEncoders() method on all modules. Might remove if unused.
        */
    public void resetEncoders() &lbrace;
        frontLeft.syncAndResetEncoders();
        frontRight.syncAndResetEncoders();
        backLeft.syncAndResetEncoders();
        backRight.syncAndResetEncoders();
    &rbrace;

    /**
        * Sets the yaw of the gyrometer to 0.
        */
    public void zeroHeading() &lbrace;
        gyro.reset();
    &rbrace;

    /**
        * @return The heading of the robot as Rotation2d object. The output is continuous (i.e. 361º
        * does not wrap around to 1º). If the gyro is reversed (see Constants.java), then the direction
        * is reversed.
        */
    public Rotation2d getHeading() &lbrace;
        double direction = DriveConstants.isGyroReversed ? -1 : 1;
        return Rotation2d.fromDegrees(direction * gyro.getAngle());
    &rbrace;
&rbrace;</code
                    ></pre>
                <div class="caption">
                    <a
                        href="https://github.com/metrobots/26-Rookie/blob/32ccb3ba9ff398da91f6409dd19ca9e556fe7fff/src/main/java/frc/robot/subsystems/drivetrain/Drivetrain.java"
                        >Metrobots 2026 Rookie Robot Swerve Drive Code</a
                    >
                </div>
            </div>
        </section>
        <br />

        <br />
        <section class="text-and-figure">
            <figure class="image-and-caption">
                <img src={articulatedSnakeImage} alt="" />
                <figcaption>
                    <a
                        href="https://cad.onshape.com/documents/a0e0aa9482a9b371aa4e7fe3/w/8b2cf2efb04eb8e2b11fd173/e/1ba6562c2f40b2d722ed71f3?renderMode=0&uiState=69ff33881817254ec966fc57"
                        >Articulated Snake Fidget Model</a
                    >
                </figcaption>
            </figure>
            <p>
                In terms of programming languages, I mainly use Rust, Kotlin,
                and Python, but I am also proficient in C, C++, Java, and
                TypeScript. While web and app development aren't personal
                interests of mine, I am comfortable using SvelteKit to build
                websites, such as this one. I have experience working with
                multiple popular microcontroller families including Arduino,
                ESP32, and STM32 development boards. I am also experienced at
                using Onshape for 3D CAD work. You can see a full list of my
                projects <a href={resolve("/projects")}>here</a>.
            </p>
        </section>
    </main>
</article>

<style>
    article {
        padding: 0 5vw;
    }

    h1 {
        text-align: center;
    }

    .text-and-figure {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 40px;
        align-items: center;
    }

    .text-and-figure pre {
        height: 300px;

        overflow: scroll;
        scrollbar-width: thin;
        scrollbar-color: var(--md-sys-color-outline) transparent;

        font-size: 8pt;
        letter-spacing: 0.05em;
    }

    .text-and-figure img {
        width: 50%;
    }

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    figcaption,
    .caption {
        text-align: center;
    }
</style>
