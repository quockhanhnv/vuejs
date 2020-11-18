<template>
    <div id="navbar">
        <nav
            id="header-top"
            class="navbar navbar-expand-lg navbar-light bg-light"
        >
            <router-link class="navbar-brand" :to="{name: 'HomePage'}"><img src="../../../public/images/logo/logo-sunsystem.svg" alt="logo" class="logo"></router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inquiry System</a>
                    </li>
                </ul>
                <div class="dropdown ml-auto">
                    <div
                        class="conf-icon"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i class="fa fa-cog"></i>
                    </div>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Setting</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Password</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click.prevent="logout" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="nav main-nav">
            <router-link
                class="nav-item nav-link"
                :to="{name: 'HomePage'}"
            >
                <i class="fa fa-home"></i>
            </router-link>
            <a class="nav-link" href="#">Inquiry List</a>
            <router-link
                class="nav-item nav-link"
                :to="{ name: 'CompanyManage' }"
            >
                Company Management
            </router-link>
            <router-link
                class="nav-item nav-link"
                :to="{ name: 'StatusManage' }"
            >
                Status Management
            </router-link>
            <a class="nav-link" href="#">New Inquiry</a>
        </nav>
    </div>
</template>

<script>
    // import notify from '../plugins/notify';
    // import authApi from '../api/auth';
    export default {
        name: "Header",

        methods: {
            // async logout() {
            //     const confirm = await notify.confirm('Are you sure ?');
            //
            //     if (!confirm.value)
            //         return;
            //
            //     try {
            //         await authApi.logout();
            //         this.$router.push({ name: 'Login'});
            //     } catch(error) {
            //         throw error;
            //     }
            // }
        }
    };
    </script>

    <style lang="scss" scoped>
    #navbar {
        #header-top {
            border: 1px solid #ddd;

            .logo {
                width: 200px;
                overflow: hidden;
            }

            .nav-item {
                border: solid 1px rgba(0, 0, 0, 0.7);
                border-radius: 10px;

                .nav-link {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: rgba(0, 0, 0, 0.7);
                }
            }

            .conf-icon {
                font-size: 1rem;
            }
        }

        .main-nav {
            background-color: #53a8e8;

            .nav-link {
                color: white;
                border-right: solid 1px white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1rem;

                &:last-child {
                    margin-left: auto;
                    background-color: orange;
                    border-left: solid 1px white;
                    border-right: 0;
                }
            }
        }
    }
</style>
