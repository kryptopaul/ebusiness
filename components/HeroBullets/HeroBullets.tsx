"use client";
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
// import image from './image.svg';
import classes from './HeroBullets.module.css';
import Lottie from 'lottie-react';
import taxi from '../../public/lotties/taxi.json'

export function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>ride hailing</span> app <br /> for the current times.
                    </Title>
                    <Text c="dimmed" mt="md">
                        Experience Fairness, Integrity and Efficiency – the Future of Ride-Hailing Awaits.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Say bye to high fees</b> – We&apos;re the most affordable ride-hailing app in the market.
                        </List.Item>
                        <List.Item>
                            <b>No more greed</b> – we ensure that our drivers are paid fairly compared to our competitors.
                        </List.Item>
                        <List.Item>
                            
                            <b>Let&apos;s thrive together</b> – we&apos;re a community of drivers and riders who believe in fairness and integrity.
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button>
                    </Group>
                </div>
                {/* <Image src={image.src} className={classes.image} /> */}
                <Lottie animationData={taxi} className={classes.image} />
            </div>
        </Container>
    );
}