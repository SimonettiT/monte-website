<script setup>
import InstagramLogo from "@/assets/icons/Instagram.vue";
import Linkedin from "@/assets/icons/Linkedin.vue";
import MailLogo from "@/assets/icons/MailOutline.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
	<footer>
		<div class="footer__wrapper">
			<section class="footer__section footer__identity">
				<h4>
					SIMONETTI
					<br />
					TOMÁS
				</h4>
				<div class="identity__description">
					<p>Copyright © {{ currentYear }} - Todos los derechos reservados</p>
				</div>
			</section>

			<section class="footer__section footer__nav">
				<h5>Menú</h5>
				<ul>
					<li><RouterLink to="/">Inicio</RouterLink></li>
					<li><RouterLink to="/about">Sobre Mí</RouterLink></li>
					<li><RouterLink to="/resources">Recursos</RouterLink></li>
					<li><RouterLink to="/contact">Contacto</RouterLink></li>
				</ul>
			</section>

			<section class="footer__section footer__social">
				<h5>Mis redes</h5>
				<ul>
					<li>
						<a
							href="https://www.instagram.com/tomy.simonetti/"
							target="_blank"
							title="Instagram"
						>
							<InstagramLogo />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/tomas-simonetti/"
							target="_blank"
							title="Universidad Blas Pascal"
						>
							<Linkedin />
						</a>
					</li>
					<li>
						<a
							href="mailto:contacto@simonettitomas.com"
							target="_blank"
							title="Universidad Blas Pascal"
						>
							<MailLogo />
						</a>
					</li>
				</ul>
			</section>
		</div>
	</footer>
</template>
<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
footer
    background-color: colors.$dark
    .footer__wrapper
        @include mixins.flex(row, space-between, flex-start, nowrap)
        padding: 2rem 3rem
        width: 95%
        max-width: 1280px
        margin-inline: auto
        @media (max-width: variables.$bkp-medium)
            padding-inline: 1rem
.footer__section
    text-align: left
    color: colors.$white
    li
        list-style: none
        margin-block: 1rem
    h5
        color: colors.getColor("accent-light")
        user-select: none
        text-transform: uppercase
        letter-spacing: 0.15rem
    a:hover
        text-decoration: underline

.footer__identity
    @include mixins.flex(column, center, flex-start, nowrap)
    max-width: 50%
    h4
        font-size: fonts.$font-xxl
        line-height: 1
        @media (max-width: variables.$bkp-medium)
            font-size: fonts.$font-xl
    .identity__description
        p
            margin-top: 0.5rem
            color: colors.$white
            font-size: fonts.$font-sm
.footer__social
    ul
        @include mixins.flex(row, flex-start, center, nowrap)
        gap: 1rem
        svg
            width: 2.5rem
            padding: 0.3rem
            transition: all variables.$transition-fast
            &:hover
                padding: 0

@media (max-width: variables.$bkp-small)
    footer
        .footer__wrapper
            @include mixins.flex(column-reverse, center, center, nowrap)
            gap: 1rem
            padding-inline: 0
    .footer__section
        text-align: center
    .footer__identity
        align-items: center
        h4
            font-size: fonts.$font-md
</style>
