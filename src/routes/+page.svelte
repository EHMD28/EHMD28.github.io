<script>
    import { resolve } from "$app/paths";
    import "highlight.js/styles/github-dark.css";
    import hljs from "highlight.js/lib/core";
    import cppLang from "highlight.js/lib/languages/cpp";
    import articulatedSnakeImage from "$lib/assets/main/projects/thumbnails/articulated-snake-assembly.png";
    import { onMount } from "svelte";

    hljs.registerLanguage("cpp", cppLang);

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
                <pre><code class="language-cpp"
                        >#include &lt;Arduino.h&gt;
#include &lt;PS4Controller.h&gt;

/* -------- Motor Utilities -------- */

constexpr int MOTOR_PWM_FREQUENCY = 20000; // 20 kHz
constexpr int MOTOR_RESOLUTION = 8; // 8-bits [0, 255]
constexpr int MAX_MOTOR_PWM = 255;

/**
 * An interface for controlling a motor channel using the TB6612FNG motor
 * driver. Assumes that the STBY is externally pulled HIGH.
 */
class MotorChannel &lbrace;
    private:
        uint8_t in1_pin;
        uint8_t in2_pin;
        uint8_t pwm_channel;
        bool is_reversed;
        

        void drive_cw(uint8_t duty_cycle) &lbrace;
            digitalWrite(in1_pin, HIGH);
            digitalWrite(in2_pin, LOW);
            ledcWrite(pwm_channel, duty_cycle);
        &rbrace;
        
        void drive_ccw(uint8_t duty_cycle) &lbrace;
            digitalWrite(in1_pin, LOW);
            digitalWrite(in2_pin, HIGH);
            ledcWrite(pwm_channel, duty_cycle);
        &rbrace;

    public:
        MotorChannel(uint8_t in1_pin, uint8_t in2_pin, uint8_t pwm_pin, uint8_t channel, bool is_reversed) &lbrace;
            this-&gt;in1_pin = in1_pin;
            this-&gt;in2_pin = in2_pin;
            this-&gt;pwm_channel = channel;
            this-&gt;is_reversed = is_reversed;

            pinMode(in1_pin, OUTPUT);
            pinMode(in2_pin, OUTPUT);
            pinMode(pwm_pin, OUTPUT);

            ledcAttachPin(pwm_pin, channel);
            ledcSetup(channel, MOTOR_PWM_FREQUENCY, MOTOR_RESOLUTION);

            stopMotor();
        &rbrace;

        /**
         * Brakes the motor and sets the duty cycle to 0.
         */
        void stopMotor() &lbrace;
            digitalWrite(in1_pin, LOW);
            digitalWrite(in2_pin, LOW);
            ledcWrite(pwm_channel, 0);
        &rbrace;
        
        /**
         * @param speed The speed and direction to drive the motor. Value: [-255, 255].
         */
        void driveMotor(int16_t speed) &lbrace;
            speed *= is_reversed ? -1 : 1;
            /* CCW rotation is positive */
            if (speed &gt; 0) &lbrace;
                drive_ccw(speed);
            &rbrace; else if (speed &lt; 0) &lbrace;
                drive_cw(-speed);
            &rbrace; else &lbrace;
                stopMotor();
            &rbrace;
        &rbrace;
&rbrace;;

/* -------- Status LED -------- */
constexpr uint8_t STATUS_LED_PIN = 2;
constexpr uint16_t SHORT_DELAY = 2000;

/* -------- Motor Driver 1 (Left Side) -------- */
constexpr uint8_t DRIVER1_BIN2_PIN = 4;
constexpr uint8_t DRIVER1_BIN1_PIN = 13;
constexpr uint8_t DRIVER1_AIN2_PIN = 14;
constexpr uint8_t DRIVER1_AIN1_PIN = 18;
constexpr uint8_t DRIVER1_PWMB_PIN = 19;
constexpr uint8_t DRIVER1_PWMA_PIN = 21;

/* -------- Motor Driver 2 (Right Side) -------- */
constexpr uint8_t DRIVER2_BIN2_PIN = 32;
constexpr uint8_t DRIVER2_BIN1_PIN = 27;
constexpr uint8_t DRIVER2_AIN2_PIN = 26;
constexpr uint8_t DRIVER2_AIN1_PIN = 25;
constexpr uint8_t DRIVER2_PWMB_PIN = 23;
constexpr uint8_t DRIVER2_PWMA_PIN = 22;

/* -------- Motor PWM Channels -------- */
constexpr uint8_t FRONT_LEFT_CHANNEL = 1;
constexpr uint8_t BACK_LEFT_CHANNEL = 2;
constexpr uint8_t FRONT_RIGHT_CHANNEL = 3;
constexpr uint8_t BACK_RIGHT_CHANNEL = 4;

/* -------- Drivetrain -------- */
/* The last argument to each constructor is whether or not the motor is reversed. */
MotorChannel front_left_motor = MotorChannel(DRIVER1_AIN1_PIN, DRIVER1_AIN2_PIN, DRIVER1_PWMA_PIN,
                                        FRONT_LEFT_CHANNEL, false);
MotorChannel back_left_motor = MotorChannel(DRIVER1_BIN1_PIN, DRIVER1_BIN2_PIN, DRIVER1_PWMB_PIN,
                                        BACK_LEFT_CHANNEL, false);
MotorChannel front_right_motor = MotorChannel(DRIVER2_AIN1_PIN, DRIVER2_AIN2_PIN, DRIVER2_PWMA_PIN,
                                        FRONT_RIGHT_CHANNEL, true);
MotorChannel back_right_motor = MotorChannel(DRIVER2_BIN1_PIN, DRIVER2_BIN2_PIN, DRIVER2_PWMB_PIN,
                                        BACK_RIGHT_CHANNEL, false);

/**
 * Drive the robot using inputs from a joystick.
 * 
 * @param fwd The speed of the robot in the forwards-backwards direction.
 * Forwards is positive, backwards is negative. Range: [-1.0, 1.0].
 * @param strafe The speed of the robot in the side-to-side direction.
 * Right is positive, left is negative. Range: [-1.0, 1.0].
 * @param rot The speed to rotate the robot. Clockwise is positive (TODO: Check
 * this). Range: [-1.0, 1.0].
 */
void drive(double fwd, double strafe, double rot) &lbrace;
    // Front left motor power
    double fl = fwd + rot + strafe;
    // Front right motor power
    double fr = fwd - rot - strafe;
    // Back left motor power
    double bl = fwd + rot - strafe;
    // Back right motor power
    double br = fwd - rot + strafe;
    /* Normalize motor powers if any of them exceed 1.0 in magnitude. */
    double max_val = max(&lbrace;abs(fl), abs(fr), abs(bl), abs(br)&rbrace;);
    if (max_val &gt; 1.0) &lbrace;
        fl /= max_val;
        fr /= max_val;
        bl /= max_val;
        br /= max_val;
    &rbrace;
    /* Convert from percentages to duty cycles */
    int16_t fl_speed = fl * MAX_MOTOR_PWM;
    int16_t fr_speed = fr * MAX_MOTOR_PWM;
    int16_t bl_speed = bl * MAX_MOTOR_PWM;
    int16_t br_speed = br * MAX_MOTOR_PWM;
    /* Drive each motor */
    front_left_motor.driveMotor(fl_speed);
    front_right_motor.driveMotor(fr_speed);
    back_left_motor.driveMotor(bl_speed);
    back_right_motor.driveMotor(br_speed);
&rbrace;

void test_drive() &lbrace;
    front_left_motor.driveMotor(100);
    delay(SHORT_DELAY);
    front_left_motor.stopMotor();
    front_right_motor.driveMotor(100);
    delay(SHORT_DELAY);
    front_right_motor.stopMotor();
    back_right_motor.driveMotor(100);
    delay(SHORT_DELAY);
    back_right_motor.stopMotor();
    back_left_motor.driveMotor(100);
    delay(SHORT_DELAY);
    back_left_motor.stopMotor();
&rbrace;

/* -------- Controller -------- */
// This is the of the device the controller is paired with (not the controller itself).
const char* PS4_MAC_ADDRESS = "44:85:00:A0:09:0F";
// Through my testing, all values in the range of [-10, 10] (out of [-128, 127]) can be ignored as stick drift.
constexpr int8_t JOYSTICK_DEADBAND = 10;
constexpr int8_t MAX_JOYSTICK_INPUT = 128;

int8_t apply_deadband(int8_t input) &lbrace;
    return (abs(input) &lt;= JOYSTICK_DEADBAND) ? 0 : input;
&rbrace;

void setup() &lbrace;
    pinMode(STATUS_LED_PIN, OUTPUT);
    PS4.begin(PS4_MAC_ADDRESS);    
    while (!PS4.isConnected()) &lbrace;
        digitalWrite(STATUS_LED_PIN, HIGH);
        delay(500);
        digitalWrite(STATUS_LED_PIN, LOW);
        delay(500);
    &rbrace;
    digitalWrite(STATUS_LED_PIN, HIGH);
&rbrace;

void loop() &lbrace;
    /* Raw joystick input values. Right is +x, left is +y, and range is [-128, 127]. */
    int8_t raw_lx = PS4.LStickX();
    int8_t raw_ly = PS4.LStickY();
    int8_t raw_rx = PS4.RStickX();
    /* Map raw inputs into percentages onto the interval [-1.0, 1.0]. */
    double lx = (double) apply_deadband(raw_lx) / MAX_JOYSTICK_INPUT;
    double ly = (double) apply_deadband(raw_ly) / MAX_JOYSTICK_INPUT;
    double rx = (double) apply_deadband(raw_rx) / MAX_JOYSTICK_INPUT;
    /* Drive robot using the controller inputs. Left joystick controls translation,
    right joystick controls rotation. */
    drive(ly, lx, -rx);
    delay(100);
&rbrace;</code
                    ></pre>
                <div class="caption">
                    <a
                        href="https://github.com/EHMD28/alphanso-robot/blob/ada89326ff60431ab9d6a1a378b3b11965bb8cd7/src/main.cpp"
                        >Alphanso Rover Robot Code</a
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
