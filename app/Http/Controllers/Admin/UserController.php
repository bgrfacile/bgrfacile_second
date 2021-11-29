<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function all()
    {
        $users = UserResource::collection(User::all());
        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }
    public function student()
    {
        $alluser = [];

        foreach (User::all() as $user) {
            if ($user->hasRole('viewer')) {
                array_push($alluser, $user);
            }
        }
        $users = UserResource::collection($alluser);
        return Inertia::render('Users/Student', [
            'users' => $users
        ]);
    }
    public function professor()
    {
        $alluser = [];
        foreach (User::all() as $user) {
            if ($user->hasRole('professor')) {
                array_push($alluser, $user);
            }
        }
        $users = UserResource::collection($alluser);
        return Inertia::render('Users/Professor', [
            'users' => $users
        ]);
    }
    public function userSchool()
    {
        $alluser = [];
        foreach (User::all() as $user) {
            if ($user->hasRole('userSchool')) {
                array_push($alluser, $user);
            }
        }
        $users = UserResource::collection($alluser);
        return Inertia::render('Users/userSchool', [
            'users' => $users
        ]);
    }
    public function preference()
    {
        $users = User::all()->reverse();
        return Inertia::render('Users/Preference', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Users/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'lastname' => ['string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // event(new Registered($user));
        User::count() <= 1 ?
            $user->assignRole('super-admin') :
            $user->assignRole('viewer');

        $slug_user = $user->slugUser()->create(['slug' => Str::slug($user->name)]);

        return redirect()->route('users.index');
        // return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user =User::find($id);
        // $user->assignRole('super-admin');
        $user = new UserResource($user);
        return Inertia::render('Users/show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        return Inertia::render('Users/edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request->all(),$id);
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            // 'password' => [Rules\Password::defaults()],
        ]);

        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        // if ($request->has('password') && empty($request->password)) {
        //     $user->password = $request->password;
        // }
        $user->save();
        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return back();
    }
}
